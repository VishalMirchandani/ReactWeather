var React = require("react");

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {location, temp} = this.props;
//
//     return (
//       <div>
//         <h3>Temperature in {location} is {temp}</h3>
//       </div>
//     );
//   }
// });

var WeatherMessage = ({location, temp}) => {
  return (
    <div>
      <h3>Temperature in {location} is {temp}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
