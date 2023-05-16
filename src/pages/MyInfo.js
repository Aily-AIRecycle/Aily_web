function MyInfo() {
  function logoutHandler() {
    sessionStorage.clear("user_email");
    document.location.href = "/";
  }

  return (
    <>
      <button onClick={logoutHandler}>로그아웃</button>
    </>
  );
}

export default MyInfo;
