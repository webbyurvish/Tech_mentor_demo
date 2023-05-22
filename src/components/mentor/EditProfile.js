import React, { useState } from 'react'
import $, { event } from 'jquery';
import { useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import './EditProfile.css'

export default function UpdateMentor() {

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [country, setCountry] = useState("");
    const [about, setAbout] = useState("");
    const [spokenLanguages, setspokenLanguag] = useState([]);
    const [skills, setSkills] = useState([]);
    const [email, setEmail] = useState("");

    let plainArray = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

    let objectArray = [
        { key: "Option 1", cat: "Group 1" },
        { key: "Option 2", cat: "Group 1" },
        { key: "Option 3", cat: "Group 1" },
        { key: "Option 4", cat: "Group 2" },
        { key: "Option 5", cat: "Group 2" },
        { key: "Option 6", cat: "Group 2" },
        { key: "Option 7", cat: "Group 2" }
    ]

    // useEffect(() => {
    //     $(function () {
    //         $(".multiSelect").each(function (e) {
    //             var self = $(this);
    //             var field = self.find(".multiSelect_field");
    //             var fieldOption = field.find("option");
    //             var placeholder = field.attr("data-placeholder");

    //             field.hide().after(
    //                 `<div className="multiSelect_dropdown"></div>
    //                       <span className="multiSelect_placeholder">` +
    //                 placeholder +
    //                 `</span>
    //                       <ul className="multiSelect_list"></ul>
    //                       <span className="multiSelect_arrow"></span>`
    //             );

    //             fieldOption.each(function (e) {
    //                 $(".multiSelect_list").append(
    //                     `<li className="multiSelect_option" data-value="` +
    //                     $(this).val() +
    //                     `">
    //                                           <a className="multiSelect_text">` +
    //                     $(this).text() +
    //                     `</a>
    //                                         </li>`
    //                 );
    //             });

    //             var dropdown = self.find(".multiSelect_dropdown");
    //             var list = self.find(".multiSelect_list");
    //             var option = self.find(".multiSelect_option");
    //             var optionText = self.find(".multiSelect_text");

    //             dropdown.attr("data-multiple", "true");
    //             list.css("top", dropdown.height() + 5);

    //             option.click(function (e) {
    //                 var self = $(this);
    //                 e.stopPropagation();
    //                 self.addClass("-selected");
    //                 field
    //                     .find("option:contains(" + self.children().text() + ")")
    //                     .prop("selected", true);
    //                 dropdown
    //                     .append(function (e) {
    //                         return $(
    //                             '<span className="multiSelect_choice">' +
    //                             self.children().text() +
    //                             '<svg className="multiSelect_deselect -iconX"><use href="#iconX"></use></svg></span>'
    //                         ).click(function (e) {
    //                             var self = $(this);
    //                             e.stopPropagation();
    //                             self.remove();
    //                             list
    //                                 .find(".multiSelect_option:contains(" + self.text() + ")")
    //                                 .removeClass("-selected");
    //                             list
    //                                 .css("top", dropdown.height() + 5)
    //                                 .find(".multiSelect_noselections")
    //                                 .remove();
    //                             field
    //                                 .find("option:contains(" + self.text() + ")")
    //                                 .prop("selected", false);
    //                             if (dropdown.children(":visible").length === 0) {
    //                                 dropdown.removeClass("-hasValue");
    //                             }
    //                         });
    //                     })
    //                     .addClass("-hasValue");
    //                 list.css("top", dropdown.height() + 5);
    //                 if (!option.not(".-selected").length) {
    //                     list.append(
    //                         '<h5 className="multiSelect_noselections">No Selections</h5>'
    //                     );
    //                 }
    //             });

    //             dropdown.click(function (e) {
    //                 e.stopPropagation();
    //                 e.preventDefault();
    //                 dropdown.toggleClass("-open");
    //                 list
    //                     .toggleClass("-open")
    //                     .scrollTop(0)
    //                     .css("top", dropdown.height() + 5);
    //             });

    //             $(document).on("click touch", function (e) {
    //                 if (dropdown.hasClass("-open")) {
    //                     dropdown.toggleClass("-open");
    //                     list.removeClass("-open");
    //                 }
    //             });
    //         });
    //     });
    // }, []);

    return (
        <div>
            <div className="editprofile">
                <div className="container">
                    <div className="edit-profile">
                        <h2>Update Profile</h2>
                        <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="profile-input">
                                        <label htmlFor='text'><p>Name</p>(Please use your real name)</label>
                                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="profile-input">
                                        <label htmlFor='text'><p>Title</p>(e.g. Software Developer)</label>
                                        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="profile-input">
                                        <label htmlFor="text"><p>About</p>
                                            (Up to 400 characters)</label>
                                        <textarea
                                            name="text"
                                            value={about}
                                            onChange={(event) => setAbout(event.target.value)}
                                            placeholder="I am software developer at surat"
                                            id=""
                                            cols="30"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="profile-input">
                                        <label htmlFor="text">Country</label>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="multiSelect">
                                        <label htmlFor="text">Spoken Languages</label>
                                        <select value={spokenLanguages}
                                            onChange={(event) => setspokenLanguag([...spokenLanguages, event.target.value])} multiple className="multiSelect_field">
                                            <option value="chrome">Chrome</option>
                                            <option value="firefox">Firefox</option>
                                            <option value="opera">Opera</option>
                                            <option value="safari">Safari</option>
                                            <option value="edge">Edge</option>
                                            <option value="vivaldi">Vivaldi</option>
                                        </select>
                                        <Multiselect showArrow options={plainArray} isObject={false} />

                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                                        <symbol
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="iconX"
                                        >
                                            <g stroke-linecap="round" stroke-linejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </g>
                                        </symbol>
                                    </svg>
                                </div>
                                <div className="col-lg-6">
                                    <div className="multiSelect">
                                        <label htmlFor="text">Skills (Up to 10)</label>
                                        <select multiple className="multiSelect_field">
                                            <option value="chrome">Chrome</option>
                                            <option value="firefox">Firefox</option>
                                            <option value="opera">Opera</option>
                                            <option value="safari">Safari</option>
                                            <option value="edge">Edge</option>
                                            <option value="vivaldi">Vivaldi</option>
                                        </select>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                                        <symbol
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="iconX"
                                        >
                                            <g stroke-linecap="round" stroke-linejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </g>
                                        </symbol>
                                    </svg>
                                </div>
                                <div className="col-lg-6">
                                    <div className="profile-input">
                                        <label htmlFor="text"
                                        ><p>Email</p>
                                        </label>
                                        <input type="email" value=".Net Developer" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-text">
                                <p>Available for new mentees</p>
                                <span
                                >Please define how would you like to drive the mentorship and
                                    how many mentees you can take.</span
                                >
                                <div className="formcheckinput">
                                    <label htmlFor="checkbox-text">
                                        <input type="checkbox" name="" id="checkbox-text" />Available
                                        for new mentees
                                    </label>
                                </div>
                                <div className="deleted-btn">
                                    <a href="javascript:void(0)">Delete my account</a>
                                </div>
                                <div className="saveorclose-btn">
                                    <a href="javascriopt:void(0)">Save</a>
                                    <a href="javascriopt:void(0)">Close</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>)
}

