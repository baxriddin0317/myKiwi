import React from 'react'
import Latest from '../../Componetns/Latest/Latest'
import Menu from '../../Componetns/Menu/Menu'
import Offers from '../../Componetns/Offers/Offers'
import Product from '../../Componetns/Product/Product'

function Home() {
    return (
        <div className='home'>
            <Menu />
            <div className="container">
                <Product />
            </div>
            <Offers />
            <Latest />
        </div>
    )
}

export default Home
