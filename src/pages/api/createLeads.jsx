let accessToken = null;

const getAccessToken = async () => {
  if (accessToken) return accessToken;

  try {
    const tokenParams = `refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`;

    const tokenResponse = await fetch(
      `${process.env.ZOHO_0AUTH_URL}?${tokenParams}`,
      { method: 'POST' },
    );

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      throw new Error(`Token Error: ${tokenData.error}`);
    }

    accessToken = tokenData.access_token;
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error.message);
    return null;
  }
};

export default async function handler(req, res) {
  // if (req.method !== 'POST') {
  //   return res.status(405).json({ error: 'Method Not Allowed' });
  // }

  try {
    const token = await getAccessToken();
    if (!token) {
      return res.status(500).json({ error: 'Failed to retrieve access token' });
    }

    const requestData = JSON.stringify({ data: [req.body.data] });

    const response = await fetch(process.env.ZOHO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Zoho-oauthtoken ${token}`,
      },
      body: requestData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return res.status(200).json(responseData);
  } catch (error) {
    console.error('Error processing request:', error.message);
    return res.status(500).json({ error: error.message });
  }
}
