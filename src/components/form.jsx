/* eslint-disable eqeqeq */
const IndexPage = () => {
  function validateEmail3505252000085291164() {
    const last_name = document.getElementById("Last_Name").value;
    const phone = document.getElementById("Phone").value;
    const email = document.getElementById("Email").value;

    if (last_name === "" || phone === "" || email === "") {
      alert("Please check the details and try again!");
      preventDefault();
    } else {
      var form = document.forms["WebToLeads3505252000085291164"];
      var emailFld = form.querySelectorAll("[ftype=email]");
      var i;
      for (i = 0; i < emailFld.length; i++) {
        var emailVal = emailFld[i].value;
        if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
          var atpos = emailVal.indexOf("@");
          var dotpos = emailVal.lastIndexOf(".");
          if (
            atpos < 1 ||
            dotpos < atpos + 2 ||
            dotpos + 2 >= emailVal.length
          ) {
            alert("Please enter a valid email address. ");
            emailFld[i].focus();
            return false;
          }
        }
      }
      return true;
    }
  }

  function checkMandatory3505252000085291164() {
    const last_name = document.getElementById("Last_Name").value;
    const phone = document.getElementById("Phone").value;
    const email = document.getElementById("Email").value;

    if (last_name === "" || phone === "" || email === "") {
      alert("Please check the details and try again!");
    } else {
      var mndFileds = new Array[("Last Name", "Phone")]();
      var fldLangVal = new Array[("Full\x20Name", "Phone")]();
      for (let i = 0; i < mndFileds.length; i++) {
        var fieldObj =
          document.forms["WebToLeads3505252000085291164"][mndFileds[i]];
        if (fieldObj) {
          if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
            if (fieldObj.type == "file") {
              alert("Please select a file to upload.");
              fieldObj.focus();
              return false;
            }
            alert(fldLangVal[i] + " cannot be empty.");
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName == "SELECT") {
            if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
              alert(fldLangVal[i] + " cannot be none.");
              fieldObj.focus();
              return false;
            }
          } else if (fieldObj.type == "checkbox") {
            if (fieldObj.checked == false) {
              alert("Please accept  " + fldLangVal[i]);
              fieldObj.focus();
              return false;
            }
          }
          try {
            if (fieldObj.name == "Last Name") {
              // eslint-disable-next-line no-global-assign
              // eslint-disable-next-line no-restricted-globals
              name = fieldObj.value;
            }
          } catch (e) {}
        }
      }
      if (!validateEmail3505252000085291164()) {
        return false;
      }
      document
        .querySelector(".crmWebToEntityForm .formsubmit")
        .setAttribute("disabled", true);
    }
  }
  return (
    <>
      <div
        className="max-w-7xl mx-auto crmWebToEntityForm"
        id="crmWebToEntityForm"
      >
        <meta httpEquiv="content-type" content="text/html; charset='UTF-8'" />
        <form
          className="flex w-full max-w-sm"
          action="https://crm.zoho.com/crm/WebToLeadForm"
          name="WebToLeads3505252000085291164"
          method="POST"
          onSubmit={() => checkMandatory3505252000085291164()}
          acceptCharset="UTF-8"
        >
          <input
            type="text"
            style={{ display: "none" }}
            name="xnQsjsdp"
            value="17730c4e7d6442ffce68a431e6d754713eb2b12b9ac7777050f2773ec54ed2d2"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input
            type="text"
            style={{ display: "none" }}
            name="xmIwtLD"
            value="61bba0cba3c8377c6a5dd6a5d5678a36b0c0af8489b97450a29344c095d7fdeb"
          />
          <input
            type="text"
            style={{ display: "none" }}
            name="actionType"
            value="TGVhZHM="
          />
          <input
            type="text"
            style={{ display: "none" }}
            name="returnURL"
            value="https&#x3a;&#x2f;&#x2f;garbhagudi-ivf.com&#x2f;thank-you"
          />
          <input
            type="text"
            style={{ display: "none" }}
            id="ldeskuid"
            name="ldeskuid"
          ></input>
          <input
            type="text"
            style={{ display: "none" }}
            id="LDTuvid"
            name="LDTuvid"
          ></input>
          <div className="w-full max-w-2xl px-5 py-10 m-auto bg-transparent rounded-lg">
            <div className="mb-6 text-3xl text-center text-gray-800 font-heading font-bold">
              Contact us !
            </div>
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="Last_Name"
                    name="Last Name"
                    maxLength={80}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-transparent text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-brandPink2 focus:border-transparent"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="Email"
                    name="Email"
                    ftype="Email"
                    maxLength={100}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-transparent text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-brandPink2 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="Phone"
                    name="Phone"
                    maxLength={30}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-transparent text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-brandPink2 focus:border-transparent"
                    placeholder="Phone"
                    onKeyPress={(e) => {
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
              </div>
              {/* <div className="col-span-2">
                  <label className="text-gray-700" htmlFor="name">
                    <textarea
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      id="comment"
                      placeholder="Enter your comment"
                      name="comment"
                    ></textarea>
                  </label>
                </div> */}
              <div className="col-span-2 hidden">
                <label className="text-gray-700" htmlFor="Lead_Source">
                  <select name="Lead Source" id="Lead_Source">
                    <option value="-None-">-None-</option>
                    <option selected value="Online">
                      Online
                    </option>
                    <option value="Media">Media</option>
                    <option value="Listing">Listing</option>
                    <option value="Referred">Referral</option>
                    <option value="Camp">Camp &amp; Events</option>
                    <option value="Sponsor">Display</option>
                  </select>
                </label>
              </div>
              <div className="col-span-2 hidden">
                <label className="text-gray-700" htmlFor="LEADCF6">
                  <select name="LEADCF6" id="LEADCF6">
                    <option value="-None-">-None-</option>
                    <option selected value="GarbhaGudi&#x20;Website">
                      GarbhaGudi Website
                    </option>
                    <option value="Bagepalli">Bagepalli</option>
                    <option value="Youtube">Youtube</option>
                    <option value="Geo&#x20;Ads">
                      Geo Ads &#x28;Ads Media network&#x29;
                    </option>
                    <option value="Affiliate&#x20;Marketing">
                      Affiliate Marketing
                    </option>
                    <option value="IndiaMART">IndiaMART</option>
                    <option value="TeleConsult&#x20;Tool">
                      TeleConsult Tool
                    </option>
                    <option value="Medobal">Medobal</option>
                    <option value="Live&#x20;events&#x20;&amp;&#x20;Webinar">
                      Live events &amp; Webinar
                    </option>
                    <option value="Vaidam">Vaidam</option>
                    <option value="Linkedin">Linkedin</option>
                    <option value="Picky&#x20;Assist">Picky Assist</option>
                    <option value="Kagglipura&#x20;Camp">
                      Kagglipura Camp
                    </option>
                    <option value="Ferticare">Ferticare</option>
                    <option value="Zealthy">Zealthy</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Live&#x20;Chat">Live Chat</option>
                    <option value="Punyahealth">Punyahealth</option>
                    <option value="Healthcare&#x20;365">Healthcare 365</option>
                    <option value="Old&#x20;Camps">Old Camps</option>
                    <option value="Mfine">Mfine</option>
                    <option value="Google">Google</option>
                    <option value="Tiptur&#x20;OPD">Tiptur OPD</option>
                    <option value="Foore">Foore</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Chitradurga&#x20;camp">
                      Chitradurga camp
                    </option>
                    <option value="Doctor&#x20;4&#x20;Africa">
                      Doctor 4 Africa
                    </option>
                    <option value="Television">Television</option>
                    <option value="Placidway">Placidway</option>
                    <option value="Radio">Radio</option>
                    <option value="Theater&#x20;Adds">Theater Adds</option>
                    <option value="News&#x20;paper">News paper</option>
                    <option value="Ziffy">Ziffy</option>
                    <option value="Name&#x20;boards">Name boards</option>
                    <option value="Quora">Quora</option>
                    <option value="Practo">Practo</option>
                    <option value="Just&#x20;Dial">Just Dial</option>
                    <option value="Clinic&#x20;spot">Clinic spot</option>
                    <option value="Sira&#x20;Thumkur">Sira</option>
                    <option value="Whatclinic">Whatclinic</option>
                    <option value="Ovu">Ovu</option>
                    <option value="EllaWomen">EllaWomen</option>
                    <option value="Doctor&#x20;Referral">
                      Doctor Referral
                    </option>
                    <option value="Kunigal&#x20;OPD">Kunigal OPD</option>
                    <option value="GarbhaGudi&#x20;Employee">
                      GarbhaGudi Employee
                    </option>
                    <option value="Friend&#x20;&amp;&#x20;Family">
                      Friend &amp; Family
                    </option>
                    <option value="Camp&#x20;&#x20;-&#x20;Kanakapura">
                      Camp - Kanakapura
                    </option>
                    <option value="KONANKUNTE&#x20;CAMP">
                      KONANKUNTE CAMP
                    </option>
                    <option value="Cure&#x20;consult">Cure consult</option>
                    <option value="ClinicSpots">ClinicSpots</option>
                    <option value="lybrate">lybrate</option>
                    <option value="Doc&#x20;prime">Doc prime</option>
                    <option value="Ellie&#x20;chat">Ellie chat</option>
                    <option value="Future&#x20;Care">Future Care</option>
                    <option value="ExpertChikitsa">ExpertChikitsa</option>
                    <option value="Others">Others</option>
                    <option value="Elite&#x20;Hospital">Elite Hospital</option>
                    <option value="Shanthinilaya&#x20;Hospital">
                      Shanthinilaya Hospital
                    </option>
                    <option value="Kanakapura">Kanakapura</option>
                    <option value="Harohalli">Harohalli</option>
                    <option value="Hoardings">Hoardings</option>
                    <option value="Display&#x20;vans">Display vans</option>
                    <option value="Banners">Banners</option>
                    <option value="Wall&#x20;paintings">Wall paintings</option>
                    <option value="Bus&#x20;advertisements">
                      Bus advertisements
                    </option>
                  </select>
                </label>
              </div>
              <div className="col-span-2 text-right">
                <input
                  type="submit"
                  id="formsubmit"
                  value={"Submit"}
                  title="Submit"
                  onClick={() => onClickButton()}
                  className="py-2 px-4  bg-brandPink4 hover:bg-brandPink focus:ring-brandPink3 focus:ring-offset-brandPink4 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                />
              </div>
              <div className="col-span-2 text-right">
                <input
                  type="reset"
                  value={"Reset"}
                  title="Reset"
                  className="py-2 px-4  bg-brandPink4 hover:bg-brandPink focus:ring-brandPink3 focus:ring-offset-brandPink4 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default IndexPage;
