import { arrowLeft } from '../../assets/icons';
import { Button } from '../../elements';
import React from 'react';
import './Dashboard.scss';

export const Dashboard = () => {
	return (
		<div>
			<div>Dashboard view</div>
			<Button colorTheme='blue' icon={arrowLeft} onClick={() => console.log('test')}>
				Test
			</Button>
			<Button secondary size='large' colorTheme='blue' iconAlign='left' icon={arrowLeft} onClick={() => console.log('test')}>
				Secondary
			</Button>
			<Button secondary colorTheme='green' iconAlign='left' icon={arrowLeft} onClick={() => console.log('test')}>
				Secondary
			</Button>
			<Button secondary colorTheme='yellow' iconAlign='left' icon={arrowLeft} onClick={() => console.log('test')}>
				Secondary
			</Button>
			<Button secondary colorTheme='cyan' iconAlign='left' icon={arrowLeft} onClick={() => console.log('test')}>
				Secondary
			</Button>
			<Button secondary colorTheme='orange' iconAlign='left' icon={arrowLeft} onClick={() => console.log('test')}>
				Secondary
			</Button>
			<Button secondary colorTheme='purple' iconAlign='left' icon={arrowLeft} onClick={() => console.log('test')}></Button>
			<Button colorTheme='blue' iconAlign='left' icon={arrowLeft} onClick={() => console.log('test')}></Button>
			<Button colorTheme='green' iconAlign='left' icon={arrowLeft} onClick={() => console.log('test')}></Button>
			<Button colorTheme='yellow' iconAlign='left' icon={arrowLeft} onClick={() => console.log('test')}></Button>
			<Button colorTheme='cyan' iconAlign='left' icon={arrowLeft} onClick={() => console.log('test')}></Button>
			<Button colorTheme='orange' iconAlign='left' icon={arrowLeft} onClick={() => console.log('test')}></Button>
			<Button colorTheme='purple' iconAlign='left' icon={arrowLeft} onClick={() => console.log('test')}></Button>
			<Button primary onClick={() => console.log('test')}>
				Primary
			</Button>
			<Button colorTheme='blue' plain onClick={() => console.log('test')}>
				Plain Button
			</Button>
			<Button size='slim' outline onClick={() => console.log('test')}>
				Login
			</Button>
			<Button destructive onClick={() => console.log('test')}>
				Destructive Button
			</Button>
		</div>
	);
};
