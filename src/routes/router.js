import { createBrowserRouter, Navigate, useLocation } from "react-router-dom";
import MyTestLayout from "../pages/templates/mytestlayout/MyTestLayout";
import MyTestMainContainer from "../pages/templates/mytestmain/MyTestMainContainer";
import MyTestContextContainer from "../pages/templates/mytestcontext/MyTestContextContainer";
import MyTestDocs from "../pages/templates/mytestdocs/MyTestDocs";
import MyTestParameterRead from "../pages/templates/mytesturlparameter/MyTestParameterRead";
import MyTestParameterContainer from "../pages/templates/mytesturlparameter/MyTestParameterContainer";
import MyTestQueryStringRead from "../pages/templates/mytestquerystring/MyTestQueryStringRead";
import MyTestQueryStringContainer from "../pages/templates/mytestquerystring/MyTestQueryStringContainer";
import Layout from "../pages/layout/Layout";
import MainContainer from "../pages/main/MainContainer";
import MyFridge from "../pages/myfridge/MyFridge";
import FoodRecommendation from "../pages/foodrecommendation/FoodRecommendation";
import RecommendRecipe from "../pages/foodrecommendation/RecommendRecipe";
import FoodComplete from "../pages/foodrecommendation/FoodComplete";
import CommunityMain from "../pages/community/CommunityMain";
import PostPopUp from "../pages/community/PostPopUp";
import LevelAndBadge from "../pages/levelandbadge/LevelAndBadge";
import ReportAndChallenge from "../pages/reportandchallenge/ReportAndChallenge";
import LoginPage from "../pages/loginandjoin/LoginPage";
import JoinPage from "../pages/loginandjoin/JoinPage";
import NotFound from "../pages/notfound/NotFound";
import MyPosts from "../pages/mypost/MyPosts";
import MyRecipe from "../pages/myrecipe/MyRecipe";

const CommunityRedirect = () => {
  const location = useLocation();
  return <Navigate to={`/communitymain${location.search}`} replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainContainer />,
      },
      {
        path: "/myposts",
        element: <MyPosts />,
        children: [
          {
            path: "post/:postId", // 게시물 클릭 시 이동할 주소
            element: <PostPopUp />,
          },
        ],
      },
      {
        path: "/myrecipe",
        element: <MyRecipe />,
      },
      {
        path: "/myfridge",
        element: <MyFridge />,
      },
      {
        path: "/foodrecommendation",
        children: [
          {
            index: true,
            element: <FoodRecommendation />,
          },
          {
            path: "recommendRecipe/:foodId", // :foodId는 동적 파라미터 (예: /recipe/3)
            element: <RecommendRecipe />,
          },
          {
            path: "foodcomplete",
            element: <FoodComplete />,
          },
        ],
      },
      {
        path: "/communitymain",
        element: <CommunityMain />,
        children: [
          {
            path: "post/:postId", // 게시물 클릭 시 이동할 주소
            element: <PostPopUp />,
          },
        ],
      },
      {
        path: "/community",
        // element: <Navigate to="/communitymain" replace />,
        element: <CommunityRedirect />,
      },
      {
        path: "/levelandbadge",
        element: <LevelAndBadge />,
      },
      {
        path: "/reportandchallenge",
        element: <ReportAndChallenge />,
        children: [
          {
            path: "post/:postId",
            element: <PostPopUp />,
          },
        ],
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/join", element: <JoinPage /> },
    ],
  },

  {
    path: "/test",
    element: <MyTestLayout />,
    children: [
      {
        path: "", // == index: true
        element: <MyTestMainContainer />
      },
    ]
  },
  {
    path: "/docs",
    element: <MyTestDocs />,
    children: [
      {
        path: "context", // == index: true
        element: <MyTestContextContainer />
      },
      {
        path: "url-parameter",
        element: <MyTestParameterContainer />
      },
      {
        path: "url-parameter/:id",
        element: <MyTestParameterRead />
      },
      {
        path: "query-string",
        element: <MyTestQueryStringContainer />
      },
      {
        path: "query-string/read",
        element: <MyTestQueryStringRead />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

export default router; 