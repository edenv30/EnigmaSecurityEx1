import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';

import { dataTableOne } from './data/tableOne';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';

import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.common.white,
      fontSize: 8,
    },
    table: {
      '& .ReactVirtualized__Table__headerRow': {
        flip: false,
        paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
        borderBottom:  `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.primary.main,
      },
    },
    tableRow: {
      cursor: 'pointer',
      borderBottom: `1px solid ${theme.palette.secondary.main}` ,

    },
    tableRowHover: {
      '&:hover': {
        backgroundColor: theme.palette.grey[200],
      },
    },
    tableCell: {
      flex: 1,
    },
    noClick: {
      cursor: 'initial',
    },
    headerClassName: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.light,
    },
    labelCustom: {
        color: theme.palette.primary.light,
      }
  });

  class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
      headerHeight: 25,
      rowHeight: 25,
    };
  
    getRowClassName = ({ index }) => {
      const { classes, onRowClick } = this.props;
  
      return clsx(classes.tableRow, classes.flexContainer, {
        [classes.tableRowHover]: index !== -1 && onRowClick != null,
      });
    };

    setRadioButton = (id, color, text) => {
      return <Grid container direction="row" alignItems="center">
              <RadioButtonCheckedRoundedIcon id={id} htmlColor={color} />
              <label labelplacement="end" htmlFor={id} style={{color: `${color}` }}>{text}</label>
          </Grid>
    }

    cellRenderer = ({ cellData, columnIndex }) => {
      const { columns, classes, rowHeight, onRowClick } = this.props;
      return (
        <TableCell
          component="div"
          className={clsx(classes.tableCell, classes.flexContainer, (columnIndex === 2) ? classes.labelCustom : null,  {
            [classes.noClick]: onRowClick == null,
          })}
          variant="body"
          style={{ height: rowHeight }}
          align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
        >
          {(columnIndex === 3) ?
            (cellData) ? 
              ( 
                this.setRadioButton("radio-active","rgb(41, 170, 41)", "Active")
              )
            : 
                (
                  this.setRadioButton("radio-canceled","rgb(208, 41, 61)", "Canceled")
                )
            :
            cellData
        }
        </TableCell>
      );
    };
  
    headerRenderer = ({ label, columnIndex }) => {
      const { headerHeight, columns, classes } = this.props;
  
      return (
        <TableCell 
          component="div"
          className={clsx(classes.tableCell, classes.flexContainer, classes.noClick, classes.headerClassName)}
          variant="head"
          style={{ height: headerHeight }}
          align={columns[columnIndex].numeric || false ? 'right' : 'left'}
        >
          <span>{label}</span>
        </TableCell>
      );
    };
  
    render() {
      const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
      return (
        <AutoSizer>
          {({ height, width }) => (
            <Table
              height={height}
              width={width}
              rowHeight={rowHeight}
              gridStyle={{
                direction: 'inherit',
              }}
              headerHeight={headerHeight}
              className={classes.table}
              {...tableProps}
              rowClassName={this.getRowClassName}
            >
              {columns.map(({ dataKey, ...other }, index) => {
                return (
                  <Column
                    key={dataKey}
                    headerRenderer={(headerProps) =>
                      this.headerRenderer({
                        ...headerProps,
                        columnIndex: index,
                      })
                    }
                    className={classes.flexContainer}
                    cellRenderer={this.cellRenderer}
                    dataKey={dataKey}
                    {...other}
                  />
                );
              })}
            </Table>
          )}
        </AutoSizer>
      );
    }
  }
  
  MuiVirtualizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        dataKey: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        numeric: PropTypes.bool,
        width: PropTypes.number.isRequired,
      }),
    ).isRequired,
    headerHeight: PropTypes.number,
    onRowClick: PropTypes.func,
    rowHeight: PropTypes.number,
  };
  
  const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);
  
  function createData(id, companyName, product, sentAt, status) {
    return { id, companyName, product, sentAt, status};
  }

  export default function TresHold() {
    
    const [rowsCollectData, setRowsCollectData] = useState([]);
    const [rows, setRows] = useState([]);
    
    useEffect( () => {
        dataTableOne.map( (c, index) => {
            const row = createData(index, c.companyName, c.product, c.sentAt, c.status);
            rowsCollectData.push(row)
            return setRowsCollectData([...rowsCollectData])
        })
    }, []);

    useEffect( () => {
        for (let i = 0; i < 200; i += 1) {
            const randomSelection = rowsCollectData[Math.floor(Math.random() * rowsCollectData.length)];
            rows.push(createData(i, randomSelection.companyName, randomSelection.product, randomSelection.sentAt, 
                randomSelection.status));
          }
          return setRows([...rows])
    },[rowsCollectData]);

    return (
      <Paper style={{ height: 320, width: '100%' }}>
        <VirtualizedTable
          rowCount={rows.length}
          rowGetter={({ index }) => rows[index]}
          columns={[
            {
              width: 140,
              label: 'COMPANY NAME',
              dataKey: 'companyName',
            },
            {
              width: 120,
              label: 'PRODUCT',
              dataKey: 'product',
            },
            {
              width: 160,
              label: 'SENT AT',
              dataKey: 'sentAt',
            },
            {
              width: 130,
              label: 'STATUS',
              dataKey: 'status',
            },
          ]}
        />
      </Paper>
    );
  }