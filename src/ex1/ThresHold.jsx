import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';

import { dataTableTwo } from './data/tableTwo';


const styles = (theme) => ({
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.common.white,
      fontSize: 10,
    },
    table: {
      '& .ReactVirtualized__Table__headerRow': {
        flip: false,
        paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.primary.main,
      },
    },
    tableRow: {
      cursor: 'pointer',
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
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
      color: theme.palette.primary.light
    },
    labelCustom: {
      color: '#78909c',
    }
  });

  class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
      headerHeight: 28,
      rowHeight: 28,
    };
  
    getRowClassName = ({ index }) => {
      const { classes, onRowClick } = this.props;
  
      return clsx(classes.tableRow, classes.flexContainer, {
        [classes.tableRowHover]: index !== -1 && onRowClick != null,
      });
    };
  
    cellRenderer = ({ cellData, columnIndex }) => {
      const { columns, classes, rowHeight, onRowClick } = this.props;
      return (
        <TableCell
          component="div"
          className={clsx(classes.tableCell, classes.flexContainer, (columnIndex === 8) ? classes.labelCustom : null, {
            [classes.noClick]: onRowClick == null,
          })}
          variant="body"
          style={{ height: rowHeight }}
          align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
        >
          {cellData}
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
  
  function createData(id, counterParty, btc, eth, xpr, eur, usd, gbr, netExposure, lastCalLculationDate) {
    return { id, counterParty, btc, eth, xpr, eur, usd, gbr, netExposure, lastCalLculationDate };
  }

  export default function TresHold() {

    const [rowsCollectData, setRowsCollectData] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect( () => {
        dataTableTwo.map( (c, index) => {
            const row = createData(index, c.counterParty, c.btc, c.eth, c.xpr, c.eur, c.usd, 
                c.gbr, c.netExposure, c.lastCalLculationDate);
            rowsCollectData.push(row)
            return setRowsCollectData([...rowsCollectData])
        })
    }, []);

    useEffect( () => {
        for (let i = 0; i < 200; i += 1) {
            const randomSelection = rowsCollectData[Math.floor(Math.random() * rowsCollectData.length)];
            rows.push(createData(i, randomSelection.counterParty, randomSelection.btc, randomSelection.eth, 
                randomSelection.xpr, randomSelection.eur, randomSelection.usd, 
                randomSelection.gbr, randomSelection.netExposure, randomSelection.lastCalLculationDate));
          }
          return setRows([...rows])
    },[rowsCollectData]);

    return (
      
      <Paper style={{ height: 280 , width: '100%' }}>
        <VirtualizedTable
          rowCount={rows.length}
          rowGetter={({ index }) => rows[index]}
          columns={[
            {
              width: 180,
              label: 'COUNTERPARTY',
              dataKey: 'counterParty',
            },
            {
              width: 100,
              label: 'BTC',
              dataKey: 'btc',
            },
            {
              width: 100,
              label: 'ETH',
              dataKey: 'eth',
            },
            {
              width: 100,
              label: 'XPR',
              dataKey: 'xpr',
            },
            {
              width: 100,
              label: 'EUR',
              dataKey: 'eur',
            },
            {
                width: 100,
                label: 'USD',
                dataKey: 'usd',
              },
              {
                width: 100,
                label: 'GBR',
                dataKey: 'gbr',
              },
              {
                width: 100,
                label: 'NET EXPOSURE',
                dataKey: 'netExposure',
              },
              {
                width: 100,
                label: 'LAST CALCULATION DATE',
                dataKey: 'lastCalLculationDate',
              },
          ]}
        />
      </Paper>
    );
  }