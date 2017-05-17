var React = require("react");

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather appliaction build on React. I have built this for The Complete React Web Developer Course.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.</li>
        <li><a href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to searcg for weather data by city name.</li>
      </ul>
      <p>You call also find the source code from the <a href="https://github.com/VishalMirchandani/ReactWeather">github repo</a>.</p>
    </div>
  )
};

module.exports = About;
