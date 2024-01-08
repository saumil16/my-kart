import { Box, Button, styled } from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import { useState } from "react";

const LeftContainer = styled(Box) (({theme}) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}));

const Image = styled('img')({
    padding: '15px'
});

const StyledButton = styled(Button) (({theme}) => ({
    width: '48%',
    height: '50px',
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}));

const ActionItem = ({product}) =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }

    return(
        <LeftContainer>
            <Box style={{padding: '15px 20px',border: '1px solid #F0F0F0', width: '90%',}}>
                <Image src={product.detailUrl} alt="productimg"/>
            </Box>
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{marginRight:10 , marginTop: 10, background: '#ff9f00'}}><ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{background:'#fb541b', marginTop: 10}}><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;