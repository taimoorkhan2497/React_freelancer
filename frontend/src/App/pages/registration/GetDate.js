import React from 'react';
import './GetDate.css'

class GetDate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date : [],
			date2 : [],
			states : [],
			cities : [],
			selectedMonth : 'Choose Month',
			selectedYear : 'Choose year'
		};
		this.changeMonth = this.changeMonth.bind(this);
		this.changeYear = this.changeYear.bind(this);
	}
  
	componentDidMount() {
		this.setState({
			date : [
				{ month: '1',},
				{ month: '2',},
				{ month: '6', },
				{ month: '7', },
				{ month: '8', },
				{ month: '9', },
				{ month: '10', },
				{ month: '11', },
				{ month: '12', },
			],
			date2 : [
				{ year: '2019',},
				{ year: '2020',},
				{ year: '2021',},
				{ year: '2022',},
				{ year: '2023', },
				{ year: '2024', },
				{ year: '2025', },
				{ year: '2026', },
				{ year: '2027', },
				{ year: '2028', },
				{ year: '2029', },
				{ year: '2030', },
			]
		});
	}
  
	changeMonth(event) {
		this.setState({selectedMonth: event.target.value});

	}

    changeYear(event) {
		this.setState({selectedYear: event.target.value});
	
	}
	
	render() {
		return (

             
			<div  id="container">
				<form>
				<div class="form-row">
				
				<div class="form-group col-md-4">
				  <label className="heading_style2" for="inputState">State</label>
				  
				  <select id="inputState" placeholder="Month" class="form-control"
				  value={this.state.selectedMonth} onChange={this.changeMonth}>
					<option selected>Month</option>
					{this.state.date.map((e, key) => {
						return <option key={key}>{e.month}</option>;
					})}
				  </select>
				</div>
				
				<div class="form-group col-md-4 ">
		
				<label className="heading_style2 pt-3" for=""></label>
				  <select id="inputState" placeholder="Year" class="form-control"
				  value={this.state.selectedYear} onChange={this.changeYear}>
					<option selected>Year</option>
					{this.state.date2.map((e, key) => {
						return <option key={key}>{e.year}</option>;
					})}
				  </select>
				</div>
				
				
				<div class="form-group col-md-4">
				  <label className="heading_style2" for="inputZip">CVV</label>
				  <input type="text" class="form-control" id=""/>
				</div>
			  </div>
			  </form>


			</div>
		)
	}
}

export default GetDate;