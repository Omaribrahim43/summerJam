var request = new XMLHttpRequest()

request.open('GET', 'data.json', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
display(data)
  if (request.status >= 200 && request.status < 400) {
    
  }
}

request.send()



function display (data){
let decare = document.querySelectorAll(".display");
decare.forEach((ele,i) => {
    ele.addEventListener("click",(oe) => {
        oe.preventDefault()
        
        if (i==0) {
            console.log(data["volunter"]);
            let row = document.querySelector(".dis")
            row.innerHTML=""
            data["volunter"].forEach(element => {
                row.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="service bg--white border__color wow fadeInUp">
                  <div class="service__icon">
                    <img src="images/shape/sm-icon/1.png" alt="icon images" />
                  </div>
                  <div class="service__details">
                    <h6><a href="service.html">${element["name"]}</a></h6>
                    <p>
                    ${element["days"]}
                    </p>
                    <p>
                    ${element["time"]}
                    </p>
                    <div class="service__btn">
                      <a
                        class="dcare__btn btn__gray hover--theme min__height-btn"
                        href="#"
                        >Read More</a
                      >
                    </div>
                  </div>
                </div>
              </div>`

            });
        }else if(i==1){
            let row = document.querySelector(".dis")
            row.innerHTML=""
            data["Mind"].forEach(element => {
                row.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="service bg--white border__color wow fadeInUp">
                  <div class="service__icon">
                    <img src="images/shape/sm-icon/1.png" alt="icon images" />
                  </div>
                  <div class="service__details">
                    <h6><a href="service.html">${element["name"]}</a></h6>
                    <p>
                    ${element["days"]}
                    </p>
                    <p>
                    ${element["time"]}
                    </p>
                    <div class="service__btn">
                      <a
                        class="dcare__btn btn__gray hover--theme min__height-btn"
                        href="#"
                        >Read More</a
                      >
                    </div>
                  </div>
                </div>
              </div>`

            });
        }else if (i ==2){
            let row = document.querySelector(".dis")
            row.innerHTML=""
            data["Physical Activity"].forEach(element => {
                row.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="service bg--white border__color wow fadeInUp">
                  <div class="service__icon">
                    <img src="images/shape/sm-icon/1.png" alt="icon images" />
                  </div>
                  <div class="service__details">
                    <h6><a href="service.html">${element["name"]}</a></h6>
                    <p>
                    ${element["days"]}
                    </p>
                    <p>
                    ${element["time"]}
                    </p>
                    <div class="service__btn">
                      <a
                        class="dcare__btn btn__gray hover--theme min__height-btn"
                        href="#"
                        >Read More</a
                      >
                    </div>
                  </div>
                </div>
              </div>`

            });
        }

    })
})


}