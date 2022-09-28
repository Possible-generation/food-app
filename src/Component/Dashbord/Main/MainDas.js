import React from 'react';

function MainDas() {
  var myDate = new Date();
  var hours = myDate.getHours();
  var greet;
  if (hours < 12) greet = 'Good Morning';
  else if (hours >= 12 && hours <= 17) greet = 'Good Afternoon';
  else if (hours >= 17 && hours <= 24) greet = 'Good Evening';
  let user = JSON.parse(sessionStorage.getItem('user'));
  return (
    <div className='text-center'>
      <h1>
        {greet} {user?.firstname}!
      </h1>
    </div>
  );
}

export default MainDas;
