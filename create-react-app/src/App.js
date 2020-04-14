import React from 'react';
import { Result, Row } from 'antd';

function App() {
  return (
    <div className='App'>
      <Row align='middle' justify='center' className='h-screen'>
        <Result status='404' title='404' subTitle='Where is my pet' />
      </Row>
    </div>
  );
}

export default App;
