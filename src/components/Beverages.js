import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { dispatch } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/actions";
function Beverages() {

	
	const [userinfo, setUserInfo] = useState({
		drinks: [],
		response: [],
	  });


 
const handleChange = (e) => {
	// Destructuring
	const { value, checked } = e.target;
	
	const { drinks } = userinfo;
	
	console.log(`${value} is ${checked}`);
	
	// Case 1 : The user checks the box
	if (checked) {
	setUserInfo({
		drinks: [...drinks, value],
		response: [...drinks, value],
	});
	}

	// Case 2 : The user unchecks the box
	else {
	setUserInfo({
		drinks: drinks.filter((e,k) => e !== value),
		response: drinks.filter((e,k) => e !== value),
	});
	}
	


}
// function toggle(source) {
// 	checkbox = document.getElementsByName('check');
// 	for (var i = 0, n = checkbox.length; i < n; i++) {
// 		checkbox[i].checked = source.checked;
// 	}
// }
	
return (
	<div className="grocery">
	<div className="container-fluid top ">
		<div className="container mt-5 pb-5 pt-5">
		<h3 className="form-head-contact-h3 ">
			What WOULD YOU LIKE TO HAVE IN DRINKS????{" "}
		</h3>

		<form>
			<div className="row">
			<div className="col-md-6">
				<div className="form-check m-3">
				<input    type="checkbox"  /> Select All<br/>
				<input
					className="form-check-input"
					type="checkbox"
					name="drinks"
					value="LASSI"
					id="flexCheckDefault"
					
					onChange={handleChange}
				/>
				<label
					className="form-check-label"
					htmlFor="flexCheckDefault"
				>
					 LASSI 
					 <div className="cards">
                    Price : ₹ 50
                    </div>
				</label>
				
				
				</div>
				<div className="form-check m-3">
				<input
					className="form-check-input"
					type="checkbox"
					name="drinks"
					value="TEA"
					id="flexCheckDefault"
					onChange={handleChange}
				/>
				<label
					className="form-check-label"
					htmlFor="flexCheckDefault"
				>
					 TEA
					 <Card.Text className="cards">
                    Price : ₹ 20
                    </Card.Text>
				</label>
				</div>
				<div className="form-check m-3">
				<input
					className="form-check-input"
					type="checkbox"
					name="drinks"
					value="COFFEE"
					id="flexCheckDefault"
					onChange={handleChange}
				/>
				<label
					className="form-check-label"
					htmlFor="flexCheckDefault"
				>
					 COFFEE
					 <Card.Text className="cards">
                    Price : ₹ 100
                    </Card.Text>
				</label>
				</div>
				<div className="form-check m-3">
				<input
					className="form-check-input"
					type="checkbox"
					name="drinks"
					value="LIME SODA"
					id="flexCheckDefault"
					onChange={handleChange}
				/>
				<label
					className="form-check-label"
					htmlFor="flexCheckDefault"
				>
					 LIME SODA
					 <Card.Text className="cards">
                    Price : ₹ 80
                    </Card.Text>
				</label>
				</div>
			</div>
			<div className="col-md-6">
				<div className="form-check m-3">
				<input
					className="form-check-input"
					type="checkbox"
					name="drinks"
					value="COLD COFFEE"
					id="flexCheckDefault"
					onChange={handleChange}
				/>
				<label
					className="form-check-label"
					htmlFor="flexCheckDefault"
				>
					 COLD COFFEE
					 <Card.Text className="cards">
                    Price : ₹ 150
                    </Card.Text>
				</label>
				</div>
				<div className="form-check m-3">
				<input
					className="form-check-input"
					type="checkbox"
					name="drinks"
					value="VIRGIN MOJITO"
					id="flexCheckDefault"
					onChange={handleChange}
				/>
				<label
					className="form-check-label"
					htmlFor="flexCheckDefault"
				>
					 VIRGIN MOJITO 
					 <Card.Text className="cards">
                    Price : ₹ 200
                    </Card.Text>
				</label>
				</div>
				<div className="form-check m-3">
				<input
					className="form-check-input"
					type="checkbox"
					name="drinks"
					value="PAPAYA SHAKE"
					id="flexCheckDefault"
					onChange={handleChange}
				/>
				<label
					className="form-check-label"
					htmlFor="flexCheckDefault"
				>
					 PAPAYA SHAKE
					 <Card.Text className="cards">
                    Price : ₹ 150
                    </Card.Text>
				</label>
				</div>
			
				
			</div>
			</div>

			<div className="form-floating mt-3 mb-3 text-center">
			
			<textarea
				className="form-control text"
				name="response"
				value={userinfo.response}
				placeholder="The checkbox values will be displayed here "
				id="floatingTextarea2"
				style={{ height: "150px" }}
				onChange={handleChange}
			></textarea>
			</div>
		</form>
		</div>
	</div>
</div>
);
}

export default Beverages;
