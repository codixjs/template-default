import React from 'react';
import { useAsync } from '@codixjs/fetch';
export default function Welcome() {
  const { data, success, error, execute, loading } = useAsync('test', () => new Promise<{ a: number }>((resolve, reject) => {
    setTimeout(() => resolve({
      a: Date.now()
    }), 5000);
  }))

  return <div>Welcome: 
    <p><button onClick={execute}>{ 
      loading
        ? 'load'
        : success
        ? data.a
        : error.message
    }</button></p>
  </div>
}