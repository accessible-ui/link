import * as React from 'react';
export declare function useA11yLink<T extends HTMLElement, E extends React.MouseEvent<T, MouseEvent>>(target: React.RefObject<T> | T | null, onClick: (event: E) => any): {
    onClick: (event: E) => any;
    role: string;
    tabIndex: number;
};
export declare function Link({ children }: LinkProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export interface LinkProps {
    children: React.ReactElement | JSX.Element;
}
export default Link;
