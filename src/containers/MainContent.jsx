import React, { useEffect } from "react";
import Chart from "chart.js/auto"
export default function MainContent (){
    useEffect(()=>{
        require ("../assets/myChart.js")
    })
    return (
        <>
        {/* <!-- content --> */}
    <div className="content"> 
      {/* <!-- top-content --> */}
      <div className="top_content">
        <div className="top_content_column">
          <div className="inner_top">
            <div className="inner_right_section">
              <p>7</p>
              <p>سبد خرید امروز</p>
              <p>سبد خرید مانده امروز</p>
            </div>
            <div className="inner_left_section">
              <span className="fa fa-shopping-cart"></span>
            </div>
          </div>
          <div className="inner_bottom">
            <p>13 در هفنه گذشته</p>
            <p>13 در ماه گذشته</p>
          </div>
        </div>
        <div className="top_content_column">
          <div className="inner_top">
            <div className="inner_right_section">
              <p>7</p>
              <p>سبد خرید امروز</p>
              <p>سبد خرید مانده امروز</p>
            </div>
            <div className="inner_left_section">
              <span className="fa fa-shopping-cart"></span>
            </div>
          </div>
          <div className="inner_bottom">
            <p>13 در هفنه گذشته</p>
            <p>13 در ماه گذشته</p>
          </div>
        </div>
        <div className="top_content_column">
          <div className="inner_top">
            <div className="inner_right_section">
              <p>7</p>
              <p>سبد خرید امروز</p>
              <p>سبد خرید مانده امروز</p>
            </div>
            <div className="inner_left_section">
              <span className="fa fa-shopping-cart"></span>

            </div>
          </div>
          <div className="inner_bottom">
            <p>13 در هفنه گذشته</p>
            <p>13 در ماه گذشته</p>
          </div>
        </div>
        <div className="top_content_column">
          <div className="inner_top">
            <div className="inner_right_section">
              <p>7</p>
              <p>سبد خرید امروز</p>
              <p>سبد خرید مانده امروز</p>
            </div>
            <div className="inner_left_section">
              <span className="fa fa-shopping-cart"></span>

            </div>
          </div>
          <div className="inner_bottom">
            <p>13 در هفنه گذشته</p>
            <p>13 در ماه گذشته</p>
          </div>
        </div>
      </div>
      {/* <!-- top-content --> */}
      {/* <!-- bottom-content --> */}
      <div className="bottom_content">
        <div className="bottom_content_right">
          <p>محصولات رو به اتمام</p>
          <table className="table my_table">
            <thead>
              <td>#</td>
              <td>دسته </td>
              <td>عنوان</td>
              <td>وضعیت</td>
              <td>عملیات</td>
            </thead>
            <tr className="col">
              <td>1</td>
              <td>دسته بندی فلان</td>
              <td>دسته بندی فلان</td>
              <td>دسته بندی فلان</td>
              <td>
                <div className="fa fa-close"></div>
              </td>
            </tr>
            <tr className="col">
              <td>2</td>
              <td>دسته بندی فلان</td>
              <td>دسته بندی فلان</td>
              <td>دسته بندی فلان</td>
              <td>
                <div className="fa fa-close"></div>
              </td>

              <td></td>
            </tr>
            <tr className="col">
              <td>3</td>
              <td>دسته بندی فلان</td>
              <td>دسته بندی فلان</td>
              <td>دسته بندی فلان</td>
              <td>
                <div className="fa fa-close"></div>
              </td>

              <td></td>
            </tr>
            <tr className="col">
              <td>4</td>
              <td>دسته بندی فلان</td>
              <td>دسته بندی فلان</td>
              <td>دسته بندی فلان</td>
              <td>
                <div className="fa fa-close"></div>
              </td>
            </tr>
            <tr className="col">
              <td>5</td>
              <td>دسته بندی فلان</td>
              <td>دسته بندی فلان</td>
              <td>دسته بندی فلان</td>
              <td>
                <div className="fa fa-close"></div>
              </td>
            </tr>
          </table>
        </div>
        <div className="bottom_content_left">
          <p>نمودار فروش یکسال گذشته</p>

          <canvas id="myChart" style={{width : '100%' , maxWidth : '700px' } }></canvas>

        </div>
      </div>
      {/* <!-- bottom-content --> */}
    </div>
    {/* <!-- content --> */}
        </>
      )
}
