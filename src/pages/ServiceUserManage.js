import React from 'react';
import members1 from "../assets/imgs/members1.png";
import members2 from "../assets/imgs/members2.png";
import members3 from "../assets/imgs/members3.png";

function ServiceUserManage() {
  return (
    <div>
      <div>
        <img src={members1} alt="페이지1"></img>
      </div>
      <div>
        <img src={members2} alt="페이지2"></img>
      </div>
      <div>
        <img src={members3} alt="페이지3"></img>
      </div>
    </div>
  );
}

export default ServiceUserManage;
