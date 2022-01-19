import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import article from "../../ethereum/article";
import web3 from "../../ethereum/web3";
import Router from "next/router";

class ArticleNew extends Component {
  state = {
    title: "",
    description: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
   this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await article.methods
        .addPost(this.state.title, this.state.description)
        .send({
          from: accounts[0],
        });
      Router.push('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <Layout>
      <div>
        <h3>New Article</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Title</label>
            <Input
              value={this.state.title}
              onChange={(event) => this.setState({ title: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Description</label>
            <Input
             
              value={this.state.description}
              onChange={(event) => this.setState({ description: event.target.value })}
            />
          </Form.Field>

          <Message error header="OOPS!" content={this.state.errorMessage} />

          <Button loading={this.state.loading} primary>
            Publish
          </Button>
        </Form>
      </div>
      </Layout>
    );
  }
}

export default ArticleNew;
