import Head from 'next/head'
import { ReactElement, useState } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import Button from '../components/Button'
import { getPageTitle } from '../config'

// Initial rewards data
const initialRewardsData = [
  { points: 100, reward: 'Donate $0.50 to charity' },
  { points: 150, reward: 'Bronze badge' },
  { points: 200, reward: 'Silver badge' },
  { points: 300, reward: 'Gold badge' },
  { points: 400, reward: '50% Discount Coffee Voucher' },
  { points: 500, reward: '50% Discount Movie Ticket' },
  { points: 600, reward: 'Gift Card - $5 Value' },
];

const RewardsPage = () => {
  const [myRewards, setMyRewards] = useState<{ points: number; reward: string }[]>([]);
  const [availableRewards, setAvailableRewards] = useState(initialRewardsData);
  const [points, setPoints] = useState(2560); // Initial user points

  // Function to handle redeeming a reward
  const handleRedeem = (reward: { points: number; reward: string }) => {
    if (points >= reward.points) {
      // Move the reward to "My Rewards" and remove it from "Available Rewards"
      setMyRewards([...myRewards, reward]);
      setAvailableRewards(availableRewards.filter((r) => r.points !== reward.points));
      // Deduct the points from the total points
      setPoints(points - reward.points);
    } else {
      alert("You don't have enough points to redeem this reward.");
    }
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Rewards')}</title>
      </Head>

      <SectionMain>
        <CardBox>

          {/* Display Current Points */}
          <header style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
            My Points: {points} points
          </header>

          {/* My Rewards Section */}
          <header style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
            My Rewards
          </header>

          {myRewards.length > 0 ? (
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexDirection: 'column' }}>
              {myRewards.map((reward) => (
                <div
                  key={reward.points}
                  style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '10px',
                    padding: '15px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#f9f9f9',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '18px', color: '#333' }}>
                      {reward.points} Points:
                    </strong>
                    <p style={{ fontSize: '16px', color: '#555' }}>{reward.reward}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No rewards redeemed yet.</p>
          )}

          {/* Available Rewards Section */}
          <header style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
            Rewards
          </header>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {availableRewards.length > 0 ? (
              availableRewards.map((reward) => (
                <div
                  key={reward.points}
                  style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '10px',
                    padding: '15px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#f9f9f9',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '18px', color: '#333' }}>
                      {reward.points} Points:
                    </strong>
                    <p style={{ fontSize: '16px', color: '#555' }}>{reward.reward}</p>
                  </div>

                  {/* Redeem Button */}
                  <Button
                    type="button"
                    color="info"
                    outline
                    label="Redeem"
                    onClick={() => handleRedeem(reward)}
                  />
                </div>
              ))
            ) : (
              <p>All rewards have been redeemed!</p>
            )}
          </div>
        </CardBox>
      </SectionMain>
    </>
  );
};

RewardsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default RewardsPage;
