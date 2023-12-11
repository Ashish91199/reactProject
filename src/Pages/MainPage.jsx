import React, { useEffect, useState } from 'react'

export default function MainPage() {
    const [crpyamt, setCrpyamt] = useState('')
    const [crpyqty, setCrpyQty] = useState('')
    const [TotalAmt, setTotalAmount] = useState('')

const caltotal = () => {
    // console.log(crpyamt, 'crpyamt');
    // console.log(crpyqty, 'crpyqty');
    let Total =crpyamt * crpyqty
    // console.log(Total, 'ghghguyg');
    setTotalAmount(Total)
}
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light text-center  mt-5">

                <a class="navbar-brand" href="index.php"><img src="assets/images/logo.png" class="logos" /></a>

            </nav>


            <div id="body-overlay" class="body-overlay"></div>

            <header class="header-section">
                <div class="header">
                    <div class="header-bottom-area">
                        <div class="container custom-container">

                        </div>
                    </div>
                </div>
            </header>


            <section class="home-baner ptb-60">
                <div class="baner-element">
                    <img src="assets/images/element/bg-element.png" alt="element" />
                </div>
                <div class="container">
                    <div class="baner-area">
                        <div class="row g-4">
                            <div class="col-lg-6 col-md-6">
                                <div class="buy-form">
                                    <div class="form-hader d-flex justify-content-between">

                                        <button class="btn buy-btn">BUY CRYP</button>

                                    </div>
                                    <form id="buy">
                                        <div class="coin-wallet pb-3">
                                            <label class="title pt-2 text-light">CRYP Price($)<span>*</span></label>
                                            <input type="number" name="bmxpprice" id="bmxpprice" class="form--control" readonly defaultValue={crpyamt}  onChange={(e) => [setCrpyamt(e.target.value),]} />

                                        </div>
                                        <div class="form-group">
                                            <label class="text-light">CRYP Qty * <span>*</span></label>
                                            <input type="number" name="tokenQtyMlk" id="tokenQtyMlk" class="form--control" placeholder="Enter Amount"  defaultValue={crpyqty} onChange={(e) => [setCrpyQty(e.target.value)]} onKeyUp={()=>caltotal()} />

                                        </div>
                                        <div class="form-group">
                                            <label class="text-light">Paying Amount($) <span>*</span></label>
                                            <input type="text" name="Amt"  class="form--control" placeholder="Enter" readonly defaultValue={TotalAmt} />

                                        </div>
                                        <div class="form-button pt-3">
                                            <button type="button" class="btn btn--base w-100 text-light">Sumbit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
              

            </section>


        </div>
    )
}
