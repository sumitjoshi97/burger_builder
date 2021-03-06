import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from "../../store/actions/index";
class Orders extends Component {
    componentDidMount() {
        this.props.onFetchOrder(this.props.token, this.props.userId);
    }

    render () {
        let orders = <Spinner />

        if (!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}
                    />
            ))
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchOrder: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(withErrorHandler(Orders, axios));