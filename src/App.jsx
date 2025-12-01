import React from 'react'

const App = () => {
  const name = 'JobHub-Portal'
  const styles = {
    backgroundColor: '#f0f0f0',
    fontFamily: 'Lato, sans-serif',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  }

  return (
    <div style={styles}>
      <h1 className="text-3xl font-bold">Welcome to {name}</h1>
    </div>
  )
}

export default App
