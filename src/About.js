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

const URL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/countries';
	
class About extends React.PureComponent {
	constructor(props) {
	    super(props);

	    this.state = {
	      columns: [
	        { name: 'countryId', title: 'Id' },
	        { name: 'country', title: 'Country' },
	        { name: 'lastUpdate', title: 'Last Update' }
	      ],
	      rows: [],
	      totalCount: 0,
	      pageSize: 10,
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

	    //return `${URL}?take=${pageSize}&skip=${pageSize * currentPage}`;
	    return `${URL}/${currentPage + 1}/${pageSize}`;
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
	        rows: data.content,
	        totalCount: data.totalElements,
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
