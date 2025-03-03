/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */
import ReactDOM from 'react-dom/client';
import Header from "./header.jsx"
import Body from "./body.jsx"

export default function App() {
  return (
    <div>
      <Header/>   
      <Body/>     
    </div>
  )
}
