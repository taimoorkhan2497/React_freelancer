import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/header/Header';
import './Reports.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

const columns = [
    { id: 'job', label: 'Job', minWidth: 300 },
    { id: 'start', label: 'Start Project', minWidth: 100 },
    { id: 'end', label: 'End Project', minWidth: 100 },
    { id: 'hour', label: 'Hour', minWidth: 100 },
    { id: 'rate', label: 'Rate Fixed', minWidth: 100 },
    { id: 'amount', label: 'Amount', minWidth: 100 },
]
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
     
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
     
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(job, start, end, hour, rate, amount) {
  return { job, start, end, hour, rate, amount };
}

const rows = [
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '20-12-2021', '20-12-2021', '00:00','400 SAR', '300 SAR')
].sort((a, b) => (a.job < b.job ? -1 : 1));

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function Reports() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
        <div>
          <Header/>


    <div class="main-area reports">
        <div class="container">
            <div class="row pt-5 pb-5">
                <div class="col-md-12 align-self-center bg-white p-5">
                    <div class="pg-heading pb-3">
                        <div class="row">
                            <div class="col-md-6 col-lg-6 col-sm-6">
                                <h3 class="font-weight-bold text-capitalize pull-left">Earning</h3>
                            </div>
                            <div class="col-md-4 col-lg-6 col-sm-6">
                                <div class="btn btn-warning text-white btn-lg button-color pull-right">
                                    <a href="/paymentwithdraw" class="text-white text-uppercase font-weight-bold" align="right">Withdraw amount</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container amounts">
                        <div class="row pt-5">
                            <div class="col-md-4 text-center">
                                <p>Escrow Amount</p>
                                <h1 class="amount pb-4 font-weight-bold">SAR 500</h1>
                            </div>
                            <div class="col-md-4 text-center">
                                <p>Pending Amount</p>
                                <h1 class="amount pb-4 font-weight-bold">SAR 400</h1></div>
                            <div class="col-md-4 text-center">
                                <p>Available Amount</p>
                                <h1 class="amount pb-4 font-weight-bold">SAR 600</h1>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <TableContainer component={Paper} >
                            <Table className={classes.table} aria-label="custom pagination table">
                                <TableHead>
                                    <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        >
                                        {column.label}
                                        </TableCell>
                                    ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {(rowsPerPage > 0
                                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows
                                ).map((row) => (
                                    <TableRow key={row.job}>
                                    <TableCell component="th" scope="row">
                                        {row.job}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {row.start}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {row.end}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {row.hour}
                                    </TableCell><TableCell style={{ width: 160 }} align="left">
                                        {row.rate}
                                    </TableCell><TableCell  align="left">
                                        {row.amount}
                                    </TableCell>
                                    </TableRow>
                                ))}

                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={6}
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        SelectProps={{
                                            inputProps: { 'aria-label': 'rows per page' },
                                            native: true,
                                        }}
                                        onChangePage={handleChangePage}
                                        onChangeRowsPerPage={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActions}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
   </div>
    </div>
  );
}
