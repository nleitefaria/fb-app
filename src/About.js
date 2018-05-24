import React from 'react';
import { Card } from 'reactstrap';

import 
{
	PagingState,
	CustomPaging,
} from '@devexpress/dx-react-grid';

import 
{
	Grid,
	Table,
	TableHeaderRow,
	PagingPanel,
} from '@devexpress/dx-react-grid-bootstrap4';

const URL = 'https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems';
	
class About extends React.PureComponent {
	constructor(props) {
	    super(props);

	    this.state = {
	      columns: [
	        { name: 'OrderNumber', title: 'Order Number' },
	        { name: 'OrderDate', title: 'Order Date' },
	        { name: 'StoreCity', title: 'Store City' },
	        { name: 'StoreState', title: 'Store State' },
	        { name: 'Employee', title: 'Employee' },
	        { name: 'SaleAmount', title: 'Sale Amount' },
	      ],
	      rows: [],
	      totalCount: 0,
	      pageSize: 6,
	      currentPage: 0,
	      loading: true,
	    };

	    this.changeCurrentPage = this.changeCurrentPage.bind(this);
	  }
	  componentDidMount() {
	    this.loadData();
	  }
	  componentDidUpdate() {
	    this.loadData();
	  }
	  changeCurrentPage(currentPage) {
	    this.setState({
	      loading: true,
	      currentPage,
	    });
	  }
	  queryString() {
	    const { pageSize, currentPage } = this.state;

	    return `${URL}?take=${pageSize}&skip=${pageSize * currentPage}`;
	  }
	  loadData() {
	    const queryString = this.queryString();
	    if (queryString === this.lastQuery) {
	      this.setState({ loading: false });
	      return;
	    }

	    fetch(queryString)
	      .then(response => response.json())
	      .then(data => this.setState({
	        rows: data.items,
	        totalCount: data.totalCount,
	        loading: false,
	      }))
	      .catch(() => this.setState({ loading: false }));
	    this.lastQuery = queryString;
	  }
	  render() {
	    const {
	      rows, columns, pageSize, currentPage, totalCount,
	    } = this.state;

	    return (
	      <Card style={{ position: 'relative' }}>
	        <Grid
	          rows={rows}
	          columns={columns}
	        >
	          <PagingState
	            currentPage={currentPage}
	            onCurrentPageChange={this.changeCurrentPage}
	            pageSize={pageSize}
	          />
	          <CustomPaging
	            totalCount={totalCount}
	          />
	          <Table />
	          <TableHeaderRow />
	          <PagingPanel />
	        </Grid>
	        
	      </Card>
	    );
	  }
}

export default About;
