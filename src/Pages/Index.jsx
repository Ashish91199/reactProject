import React from 'react'

const Index = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"><img src="assets/images/logo.png" class="logos"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            </nav>
            <div id="home_quicklinks">
                <a class="quicklink link1" href="busdtobmxp">
                    <span class="ql_caption">
                        <span class="outer">
                            <span class="inner">
                                <h2>USDT-BMXP</h2>
                            </span>
                        </span>
                    </span>

                </a>

                <a class="quicklink link3" href="busdtomlk">
                    <span class="ql_caption">
                        <span class="outer">
                            <span class="inner">
                                <h2>USDT-MLK </h2>
                            </span>
                        </span>
                    </span>

                </a>
                <a class="quicklink link2" href="mlkbmxp">
                    <span class="ql_caption">
                        <span class="outer">
                            <span class="inner">
                                <h2>BMXP-MLK</h2>
                            </span>
                        </span>
                    </span>

                </a>


                <div class="clear"></div>
            </div>

        </div>
    )
}

export default Index
