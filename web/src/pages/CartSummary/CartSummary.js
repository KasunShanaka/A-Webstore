import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import style from './CartSummary.module.scss';

import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const CartSummary = () => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    

    const products = {
        ProductId: 1,
        ProductName: "TOY Horse",
        ProductCategory: "puzzle",
        ProductImage: "url",
        productPrice: 39.98,
        
        
    }

    return (
        <div className={style.container}>
            <Navbar />
            <div className={style.pageContent}>
                <div className={style.pageName}>
                    Your Cart
                </div>
                <div className={style.content}>
                    <Table className={style.table} sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                <StyledTableCell align="right">Calories</StyledTableCell>
                                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <StyledTableRow key={product.ProductId}>
                                    <StyledTableCell component="th" scope="row">
                                        {product.ProductName}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{product.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{product.fat}</StyledTableCell>
                                    <StyledTableCell align="right">{product.carbs}</StyledTableCell>
                                    <StyledTableCell align="right">{product.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartSummary
