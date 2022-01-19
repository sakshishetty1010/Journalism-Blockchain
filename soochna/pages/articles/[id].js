import React, { Component } from "react";
import Layout from "../../components/Layout";
import article from "../../ethereum/article";
import { Button, Form, Input, Message, ButtonGroup } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import Link from "next/link";
import Router from "next/router";

class ArticleShow extends Component {
  state = {
    value: "",
    loading: false,
    errorMessage: "",
  };
  static async getInitialProps(props) {
    const n = await article.methods.getPosts(props.query.id).call();
    console.log(n);
    return {
      id: n[0],
      upVotes: n[1],
      downVotes: n[2],
      title: n[3],
      description: n[4],
      author: n[5],
    };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await article.methods.tipArticleOwner(this.props.id).send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),
      });

      Router.replace(`/articles/${this.props.id}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: "" });
  };
  increaseUpvote = async () => {
    const accounts = await web3.eth.getAccounts();
    await article.methods.upVotePost(this.props.id).send({
      from: accounts[0],
    });
    Router.replace(`/articles/${this.props.id}`);
  };
  decreaseUpvote = async () => {
    const accounts = await web3.eth.getAccounts();
    await article.methods.downVotePost(this.props.id).send({
      from: accounts[0],
    });
    Router.replace(`/articles/${this.props.id}`);
  };
  render() {
    return (
      <Layout>
        <div>
          <div>
            {" "}
            <i>Published by : {this.props.author}</i>
          </div>
          <h3>{this.props.title}</h3>
          <br />
          <ButtonGroup>
            <Button onClick={this.increaseUpvote}>
              {this.props.upVotes} Upvotes
            </Button>
            <Button onClick={this.decreaseUpvote}>
              {this.props.downVotes} Upvotes
            </Button>
          </ButtonGroup>

          <h3>{this.props.description}</h3>
          <h3>{this.props.address}</h3>
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
              <label>TIP AUTHOR</label>
              <Input
                value={this.state.value}
                onChange={(e) => this.setState({ value: e.target.value })}
                label="ether"
                labelPosition="right"
              />
            </Form.Field>
            <Message
              error
              header="OOPS!"
              content={this.state.errorMessage}
            ></Message>
            <Button loading={this.state.loading} primary>
              Contribute!
            </Button>
          </Form>
        </div>
      </Layout>
    );
  }
}

export default ArticleShow;
