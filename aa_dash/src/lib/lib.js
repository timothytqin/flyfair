export const getMinCrewBid = (bids) => {
  return bids
    .filter((bid) => bid.usertype == "crew")
    .map((bid) => parseFloat(bid.amount))
    .reduce((a, b) => Math.min(a, b));
};

export const getMinPilotBid = (bids) => {
  return bids
    .filter((bid) => bid.usertype == "pilot")
    .map((bid) => parseFloat(bid.amount))
    .reduce((a, b) => Math.min(a, b));
};
