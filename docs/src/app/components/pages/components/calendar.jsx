var React = require('react');
var mui = require('mui');
var Calendar = mui.Calendar;
var ComponentDoc = require('../../component-doc.jsx');

var DatePickerPage = React.createClass({

  render: function() {

    var code =
      '//Portrait Dialog\n' +
      '<DatePicker\n' +
      '  hintText="Portrait Dialog"\n\n' +
      '//Landscape Dialog\n' +
      '<DatePicker\n' +
      '  hintText="Landscape Dialog"\n' +
      '  mode="landscape"/>'; 

    var componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'defaultDate',
            type: 'date object',
            header: 'optional',
            desc: 'This is the initial date value of the component.'
          },
          {
            name: 'formatDate',
            type: 'function',
            header: 'default: formats to M/D/YYYY',
            desc: 'This function is called to format the date to display in ' +
              'the input box. By default, date objects are formatted to M/D/YYYY.'
          },
          {
            name: 'mode',
            type: 'one of: portrait, landscape',
            header: 'default: portrait',
            desc: 'Tells the component to display the picker in portrait or landscape mode.'
          }
        ]
      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'getDate',
            header: 'DatePicker.getDate()',
            desc: 'Returns the current date value.'
          },
          {
            name: 'setDate',
            header: 'DatePicker.setDate(d)',
            desc: 'Sets the date value to d, where d is a date object.'
          }
        ]
      }
    ];

    return (
      <ComponentDoc
        name="Date Picker"
        code={code}
        componentInfo={componentInfo}>
				<Calendar onDayTouchTap={this.handleDateSelect} />

      </ComponentDoc>
    );
	},
	handleDateSelect: function(e, date) {
		alert(date);
	}

});

module.exports = DatePickerPage;
