const Container = ({ children, className = "" }) => {
  return (
    <section className={`max-w-7xl mx-auto w-11/12 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
