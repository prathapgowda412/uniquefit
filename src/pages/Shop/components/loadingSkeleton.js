import { Container, Grid } from '@material-ui/core';
import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';
const loadingSkeleton = () => {
	return (
		<Grid xs={6} md={3}>
			<Container style={{ marginBottom: '30px' }}>
				<Skeleton variant="rect" style={{ height: '200px' }} />
				<Skeleton variant="text" style={{ height: '30px' }} />
				<Skeleton variant="text" style={{ height: '30px', width: '30%' }} />
			</Container>
		</Grid>
	);
};

export default loadingSkeleton;
