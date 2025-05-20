import { ReactNode } from 'react';

type FlexContainerProps = {
	children: ReactNode;
};
function FlexContainer({ children }: FlexContainerProps) {
	return <div className='flex justify-between items-center'>{children}</div>;
}

export default FlexContainer;
