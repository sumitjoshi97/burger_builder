import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from "../../store/actions/index";
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        
    }

    render () {
        let orders = <Spinner />

        if (!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ))
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchOrder: () => dispatch(actions.fetchOrders())
    }
}

export default connect(null, mapDispatchToProps)(withErrorHandler(Orders, axios));