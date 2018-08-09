import React from 'react';

export default () => {
  return (
    <footer className="shadow-lg bg-dark text-white mt-5 p-4 text-center fixed-bottom">
      Copyright &copy; {new Date().getFullYear()} DevNetwork
    </footer>
  );
};
