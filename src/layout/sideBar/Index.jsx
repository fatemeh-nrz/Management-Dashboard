import React from 'react'
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';
export default function Index() {
  const {sideBar, setSideBar} = useContext(AdminContext);

  return (
    
   <>

<div className="side_bar">
        {/* <!-- side_bar_container --> */}
        <div className="side_bar_container">
          <img src="../assets/pic/profile_pic.jpg" alt="profile_pic"/>
          <ul>
            <li><i className="fa fa-tachometer"></i><span>داشبورد</span></li>
            <h3>فروشگاه</h3>
            <li><i className="fa fa-gift"></i><span>مدیریت گروه محصول</span></li>
            <li><i className="fa fa-inbox"></i><span>مدیریت محصول</span></li>
            <li><i className="fa fa-male"></i><span>مدیریت برند ها</span></li>
            <li><i className="fa fa-eye"></i><span>مدیریت گارانتی ها</span></li>
            <li><i className="fa fa-sliders"></i><span>مدیریت رنگ ها</span></li>
            <li><i className="fa fa-unlock"></i><span>مدیریت تخفیف ها</span></li>
            <h3>سفارشات و سبد</h3>
            <li><i className="fa fa-gift"></i><span>مدیریت  سبد </span></li>
            <li><i className="fa fa-inbox"></i><span >مدیریت سفارشات </span></li>
            <li><i className="fa fa-male"></i><span>مدیریت  نحوه ارسال</span></li>

            <h3>کاربران و همکاران</h3>
            <li><i className="fa fa-gift"></i><span> مشاهده کاربران </span></li>
            <li><i className="fa fa-inbox"></i><span> نقش ها</span></li>
            <li><i className="fa fa-male"></i><span>مجوز  ها</span></li>

            <h3>ارتباطات</h3>
            <li><i className="fa fa-gift"></i><span>سوال ها  </span></li>
            <li><i className="fa fa-inbox"></i><span>نظرات </span></li>
         
          </ul>
        </div>
        {/* // <!-- side_bar_container --> */}

        
      </div>
   
   
   </>




  )
}
