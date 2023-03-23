import React from 'react';
import contents1 from "../assets/imgs/contents1.png";
import contents2 from "../assets/imgs/contents2.png";

function ContentsManage() {
  return (
    <div>
      <div>
        <img src={contents1} alt="페이지1"></img>
      </div>
      <div>
        <img src={contents2} alt="페이지2"></img>
      </div>
    </div>
  );
}

export default ContentsManage;
