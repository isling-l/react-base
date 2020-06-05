import React from 'react';
const Markdown = require('react-markdown/with-html');

type Props = {
  title: string;
  content: string;
  publishedAt: string;
};

const Blog: React.FunctionComponent<Props> = props => {
  const { title, content, publishedAt } = props;

  return (
    <div className='post'>
      <div className='title text-5xl font-semibold mb-2 text-blue-600'>
        {title}
      </div>
      <div className='text-blue-600 text-2xl mb-12'>{publishedAt}</div>
      <div className='post-content text-2xl'>
        <Markdown source={content} escapeHtml={false} />
      </div>
    </div>
  );
};

export default Blog;
