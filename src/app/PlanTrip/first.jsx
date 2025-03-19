import "./page.css";
import { useState } from "react";
import { WithContext as ReactTags } from 'react-tag-input';



const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];




export default function Form({ onSubmit,whereTo }) {
  const today = new Date().toISOString().split('T')[0];
	const [info, setInfo] = useState({
	  whereTo: whereTo || '',
	  startDate: today,
	  endDate: today,
	  inviteEmail: ''
	});

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };



  //cool email input stuf...
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault();
    const email = inputValue.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== '' && emailRegex.test(email)) {
      setTags([...tags, email]);
      setInputValue('');
    } else {
      alert("Please enter a valid email address");
    }
  }
};

  const handleDelete = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="WhereTo">
      <div className="row">
        <h1>Plan a New Trip</h1>
      </div>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ ...info, inviteEmails: tags }); //passing collected info back to parent
        }}
      >
        <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="LargeFormInputs">
            <div className="LargeFormInputsBox">
              <label>Where To</label>
              <input
                type="text"
                name="whereTo"
                placeholder="Place you wanna go"
                value={info.whereTo}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <div className="col-3">
                <div className="LargeFormInputsBox">
                  <label>Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={info.startDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="LargeFormInputsBox">
                  <label>End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={info.endDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-6">
            {/* Cool block email input */}


                <div className="LargeFormInputsBox">
                <label>Invite Emails</label>
                {/* Input below */}
                <input
                  type="email"
                  placeholder="Enter email and press Enter"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="email-input"
                />
                {/* Render tags separately */}
                <div className="email-tags ">
                  {tags.map((tag, index) => (
                    <span className="email-tag" key={index} onClick={() => handleDelete(index)}>
                      {tag} &times;
                    </span>
                  ))}
                </div>
              </div>



              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <input className="StartPlanning" type="submit" value="Start Planning" />
          </div>
          <div className="col-3"></div>
        </div>
      </form>
    </div>
  );
}
