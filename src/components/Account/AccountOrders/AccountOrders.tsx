import React, { useState } from "react";
import {
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  Paper,
  Table,
  IconButton,
  Collapse,
  TableBody,
  Box,
  Link,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link as RouterLink } from "react-router-dom";
import { RoutesNames } from "../../../router/routes";
import { OrderType } from "../../../ts/ProductsTypes";
import { useGetUserOrdersQuery } from "../../../services/userApi";
import FullScreenLoader from "../../common/FullScreenLoader/FullScreenLoader";

type RowProps = {
  order: OrderType;
};

const Row: React.FC<RowProps> = ({
  order: { id, discountedTotal, total, totalProducts, totalQuantity, products },
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton size="small" onClick={handleOpen}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Order №{id}
        </TableCell>
        <TableCell align="right">{totalQuantity}</TableCell>
        <TableCell align="right">{totalProducts}</TableCell>
        <TableCell align="right">{discountedTotal}</TableCell>
        <TableCell align="right">{total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Discounted Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.title}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        p: 2,
                      }}
                    >
                      <Link
                        to={`/${RoutesNames.PRODUCT}/${id}`}
                        component={RouterLink}
                        underline="hover"
                      >
                        {product.title}
                      </Link>
                    </TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">
                      {product.discountedPrice}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const AccountOrders = () => {
  const { data, isLoading } = useGetUserOrdersQuery();
  if (isLoading || !data) return <FullScreenLoader />;

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Order details</TableCell>
              <TableCell align="right">Total products</TableCell>
              <TableCell align="right">Total quantity</TableCell>
              <TableCell align="right">Discounted total</TableCell>
              <TableCell align="right">Total sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((order) => (
              <Row key={order.id} order={order} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AccountOrders;
