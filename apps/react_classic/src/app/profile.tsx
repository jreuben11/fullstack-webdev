import styled from 'styled-components';

const StyledProfile = styled.div`
  color: pink;
`;

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export function Profile() {
  return (
    <>
      <h1>Profile:</h1>
      <StyledProfile>
        {/** shorthand syntax for React.Fragment. It is used to group multiple elements without adding an extra node to the DOM. */}
        <>
          <h1>{user.name}</h1>
          <img
            className="avatar"
            src={user.imageUrl}
            // biome-ignore lint/style/useTemplate: <explanation>
            alt={'Photo of ' + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize,
            }}
          />
        </>
      </StyledProfile>
    </>
  );
}

export default Profile;
