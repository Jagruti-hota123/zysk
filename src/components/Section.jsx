

// eslint-disable-next-line react/prop-types
const Section = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`px-4 py-10 md:px-8  lg:px-16 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Section;
