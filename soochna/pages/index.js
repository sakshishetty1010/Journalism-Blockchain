import React, { Component } from "react";
import article from "../ethereum/article";
import Layout from "../components/Layout";
import { Card, Button } from "semantic-ui-react";
import Link from 'next/link';

class ArticleIndex extends Component {
  static async getInitialProps() {
    const count = await article.methods.getPostCount().call();
    let news = [];
    for (let i = 0; i < count; i++) {
      const n = await article.methods.getPosts(i).call();
      news.push({
        id: n[0],
        upVotes: n[1],
        downVotes: n[2],
        title: n[3],
        description: n[4],
        author: n[5],
      });
    }
    return { news };
  }

  renderArticles() {
    const items = this.props.news.map((n)=>{
      const id = n.id;
      return {
        header: n.title,
        description: (
          <Link href={`/articles/${id}`}>
            <a>View Article</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          {this.renderArticles()}
        </div>
      </Layout>
    );
  }
}

export default ArticleIndex;
