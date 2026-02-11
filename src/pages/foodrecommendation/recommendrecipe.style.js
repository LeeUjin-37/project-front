import styled from "styled-components";

const S = {};

/* Hero */
S.Hero = styled.section`
  width: 100%;
  height: 360px;
  position: relative;
  overflow: hidden;
`;

S.HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

S.HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
`;

S.HeroInner = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  padding: 0 20px;
`;

S.Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

S.Description = styled.p`
  font-size: 13px;
  margin-top: 10px;
  color: #444;
`;

S.MetaRow = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

S.MetaBadge = styled.div`
  padding: 4px 10px;
  border-radius: 20px;
  background: #fff;
  font-size: 12px;
  border: 1px solid #eee;
`;

/* Content */
S.Container = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  padding: 40px 20px 100px;
`;

S.TagRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

S.Tag = styled.div`
  background: #f7f7f7;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
`;

S.SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 15px;
`;

S.IngredientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`;

S.IngredientCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
`;

S.CardTitle = styled.div`
  font-weight: 700;
  margin-bottom: 10px;
`;

S.IngredientItem = styled.div`
  font-size: 13px;
  margin-bottom: 6px;
`;

S.StepTitle = styled.h2`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 20px;
`;

S.StepGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

S.StepCard = styled.div`
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
`;

S.StepNumber = styled.div`
  background: #ff4d37;
  color: #fff;
  width: 24px;
  height: 24px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`;

S.StepImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

S.StepContent = styled.div`
  padding: 10px;
  font-size: 12px;
`;

S.ButtonRow = styled.div`
  text-align: center;
  margin-top: 40px;
`;

S.PrimaryButton = styled.button`
  padding: 10px 24px;
  border-radius: 6px;
  border: 1px solid #ff4d37;
  background: #fff;
  color: #ff4d37;
  font-weight: 700;
  cursor: pointer;
`;

export default S;
