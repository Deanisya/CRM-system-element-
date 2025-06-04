import { ReactNode } from 'react';

type GridContainerProps = {
	children: ReactNode;
};
function GridContainer({ children }: GridContainerProps) {
	return <div className='grid grid-cols-4 items-center'>{children}</div>;
}

export default GridContainer;
