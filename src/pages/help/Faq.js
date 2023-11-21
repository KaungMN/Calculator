export default function Faq() {
  return (
    <div className="faq">
      <h3>Frequently Asked Questions</h3>
      <p>
        Please be aware that the FAQ responses provided above are based on
        information available up to January 2022, and the version mentioned for
        React Router is 5.2.0. However, it has come to our attention that the
        current version of React Router is 6.4.0.
      </p>

      <div className="question">
        <p>
          <strong>1. What is React Router? </strong>
        </p>
        <p>
          React Router is a library for declarative routing in React
          applications. It enables navigation among views of the application,
          allowing for a single-page web application experience.
        </p>
      </div>

      <div className="question">
        <p>
          <strong>2. How do I install React Router in my project?</strong>
        </p>
        <p>
          You can install React Router using npm or yarn. Use the following
          command:
          <br />
          <code>npm install react-router-dom</code>
          <br />
          <code>yarn add react-router-dom</code>
        </p>
      </div>

      <div className="question">
        <p>
          <strong>
            3. What is the difference between BrowserRouter and HashRouter?
          </strong>
        </p>
        <p>
          BrowserRouter uses the HTML5 history API for cleaner URLs, while
          HashRouter uses the hash portion of the URL. The choice depends on
          server configuration and preference.
        </p>
      </div>

      <div className="question">
        <p>
          <strong>4. How do I create a basic route in React Router?</strong>
        </p>
        <p>
          You can define a route using the `Route` component from React Router.
          For example:
          <br />
          <code>
            import &lt;Route&gt; from 'react-router-dom';
            <br />
            // ...
            <br />
            &lt; Route path="/home" component=&lt;Home&gt; /&gt;
          </code>
        </p>
      </div>

      <div className="question">
        <p>
          <strong>5. Can I have nested routes in React Router?</strong>
        </p>
        <p>
          Yes, you can nest &lt;Route&gt; components to create a nested route
          structure. This allows for more granular control over rendering
          components based on the URL.
        </p>
      </div>
    </div>
  );
}
