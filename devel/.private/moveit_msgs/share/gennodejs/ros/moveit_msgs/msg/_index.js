
"use strict";

let MoveGroupActionFeedback = require('./MoveGroupActionFeedback.js');
let MoveGroupResult = require('./MoveGroupResult.js');
let PickupResult = require('./PickupResult.js');
let MoveGroupSequenceActionFeedback = require('./MoveGroupSequenceActionFeedback.js');
let MoveGroupActionGoal = require('./MoveGroupActionGoal.js');
let MoveGroupGoal = require('./MoveGroupGoal.js');
let PickupGoal = require('./PickupGoal.js');
let MoveGroupSequenceGoal = require('./MoveGroupSequenceGoal.js');
let PlaceFeedback = require('./PlaceFeedback.js');
let MoveGroupSequenceFeedback = require('./MoveGroupSequenceFeedback.js');
let ExecuteTrajectoryFeedback = require('./ExecuteTrajectoryFeedback.js');
let PlaceGoal = require('./PlaceGoal.js');
let MoveGroupSequenceActionResult = require('./MoveGroupSequenceActionResult.js');
let MoveGroupSequenceActionGoal = require('./MoveGroupSequenceActionGoal.js');
let PlaceAction = require('./PlaceAction.js');
let PickupFeedback = require('./PickupFeedback.js');
let ExecuteTrajectoryAction = require('./ExecuteTrajectoryAction.js');
let ExecuteTrajectoryGoal = require('./ExecuteTrajectoryGoal.js');
let PlaceActionGoal = require('./PlaceActionGoal.js');
let ExecuteTrajectoryActionGoal = require('./ExecuteTrajectoryActionGoal.js');
let ExecuteTrajectoryActionResult = require('./ExecuteTrajectoryActionResult.js');
let PickupActionResult = require('./PickupActionResult.js');
let PickupActionFeedback = require('./PickupActionFeedback.js');
let ExecuteTrajectoryActionFeedback = require('./ExecuteTrajectoryActionFeedback.js');
let MoveGroupSequenceResult = require('./MoveGroupSequenceResult.js');
let ExecuteTrajectoryResult = require('./ExecuteTrajectoryResult.js');
let PlaceActionFeedback = require('./PlaceActionFeedback.js');
let PlaceActionResult = require('./PlaceActionResult.js');
let MoveGroupFeedback = require('./MoveGroupFeedback.js');
let PickupActionGoal = require('./PickupActionGoal.js');
let MoveGroupActionResult = require('./MoveGroupActionResult.js');
let MoveGroupAction = require('./MoveGroupAction.js');
let PickupAction = require('./PickupAction.js');
let PlaceResult = require('./PlaceResult.js');
let MoveGroupSequenceAction = require('./MoveGroupSequenceAction.js');
let PlaceLocation = require('./PlaceLocation.js');
let CartesianPoint = require('./CartesianPoint.js');
let DisplayRobotState = require('./DisplayRobotState.js');
let Grasp = require('./Grasp.js');
let GenericTrajectory = require('./GenericTrajectory.js');
let ConstraintEvalResult = require('./ConstraintEvalResult.js');
let DisplayTrajectory = require('./DisplayTrajectory.js');
let PlannerInterfaceDescription = require('./PlannerInterfaceDescription.js');
let PlanningSceneComponents = require('./PlanningSceneComponents.js');
let MotionPlanRequest = require('./MotionPlanRequest.js');
let CartesianTrajectory = require('./CartesianTrajectory.js');
let PlanningOptions = require('./PlanningOptions.js');
let TrajectoryConstraints = require('./TrajectoryConstraints.js');
let LinkScale = require('./LinkScale.js');
let PositionConstraint = require('./PositionConstraint.js');
let WorkspaceParameters = require('./WorkspaceParameters.js');
let OrientedBoundingBox = require('./OrientedBoundingBox.js');
let VisibilityConstraint = require('./VisibilityConstraint.js');
let GripperTranslation = require('./GripperTranslation.js');
let PlanningScene = require('./PlanningScene.js');
let AllowedCollisionMatrix = require('./AllowedCollisionMatrix.js');
let BoundingVolume = require('./BoundingVolume.js');
let PositionIKRequest = require('./PositionIKRequest.js');
let AttachedCollisionObject = require('./AttachedCollisionObject.js');
let PlannerParams = require('./PlannerParams.js');
let Constraints = require('./Constraints.js');
let RobotTrajectory = require('./RobotTrajectory.js');
let MotionSequenceResponse = require('./MotionSequenceResponse.js');
let CostSource = require('./CostSource.js');
let KinematicSolverInfo = require('./KinematicSolverInfo.js');
let PlanningSceneWorld = require('./PlanningSceneWorld.js');
let ContactInformation = require('./ContactInformation.js');
let OrientationConstraint = require('./OrientationConstraint.js');
let CollisionObject = require('./CollisionObject.js');
let JointLimits = require('./JointLimits.js');
let MoveItErrorCodes = require('./MoveItErrorCodes.js');
let CartesianTrajectoryPoint = require('./CartesianTrajectoryPoint.js');
let ObjectColor = require('./ObjectColor.js');
let MotionPlanDetailedResponse = require('./MotionPlanDetailedResponse.js');
let MotionPlanResponse = require('./MotionPlanResponse.js');
let MotionSequenceRequest = require('./MotionSequenceRequest.js');
let JointConstraint = require('./JointConstraint.js');
let LinkPadding = require('./LinkPadding.js');
let AllowedCollisionEntry = require('./AllowedCollisionEntry.js');
let MotionSequenceItem = require('./MotionSequenceItem.js');
let RobotState = require('./RobotState.js');

module.exports = {
  MoveGroupActionFeedback: MoveGroupActionFeedback,
  MoveGroupResult: MoveGroupResult,
  PickupResult: PickupResult,
  MoveGroupSequenceActionFeedback: MoveGroupSequenceActionFeedback,
  MoveGroupActionGoal: MoveGroupActionGoal,
  MoveGroupGoal: MoveGroupGoal,
  PickupGoal: PickupGoal,
  MoveGroupSequenceGoal: MoveGroupSequenceGoal,
  PlaceFeedback: PlaceFeedback,
  MoveGroupSequenceFeedback: MoveGroupSequenceFeedback,
  ExecuteTrajectoryFeedback: ExecuteTrajectoryFeedback,
  PlaceGoal: PlaceGoal,
  MoveGroupSequenceActionResult: MoveGroupSequenceActionResult,
  MoveGroupSequenceActionGoal: MoveGroupSequenceActionGoal,
  PlaceAction: PlaceAction,
  PickupFeedback: PickupFeedback,
  ExecuteTrajectoryAction: ExecuteTrajectoryAction,
  ExecuteTrajectoryGoal: ExecuteTrajectoryGoal,
  PlaceActionGoal: PlaceActionGoal,
  ExecuteTrajectoryActionGoal: ExecuteTrajectoryActionGoal,
  ExecuteTrajectoryActionResult: ExecuteTrajectoryActionResult,
  PickupActionResult: PickupActionResult,
  PickupActionFeedback: PickupActionFeedback,
  ExecuteTrajectoryActionFeedback: ExecuteTrajectoryActionFeedback,
  MoveGroupSequenceResult: MoveGroupSequenceResult,
  ExecuteTrajectoryResult: ExecuteTrajectoryResult,
  PlaceActionFeedback: PlaceActionFeedback,
  PlaceActionResult: PlaceActionResult,
  MoveGroupFeedback: MoveGroupFeedback,
  PickupActionGoal: PickupActionGoal,
  MoveGroupActionResult: MoveGroupActionResult,
  MoveGroupAction: MoveGroupAction,
  PickupAction: PickupAction,
  PlaceResult: PlaceResult,
  MoveGroupSequenceAction: MoveGroupSequenceAction,
  PlaceLocation: PlaceLocation,
  CartesianPoint: CartesianPoint,
  DisplayRobotState: DisplayRobotState,
  Grasp: Grasp,
  GenericTrajectory: GenericTrajectory,
  ConstraintEvalResult: ConstraintEvalResult,
  DisplayTrajectory: DisplayTrajectory,
  PlannerInterfaceDescription: PlannerInterfaceDescription,
  PlanningSceneComponents: PlanningSceneComponents,
  MotionPlanRequest: MotionPlanRequest,
  CartesianTrajectory: CartesianTrajectory,
  PlanningOptions: PlanningOptions,
  TrajectoryConstraints: TrajectoryConstraints,
  LinkScale: LinkScale,
  PositionConstraint: PositionConstraint,
  WorkspaceParameters: WorkspaceParameters,
  OrientedBoundingBox: OrientedBoundingBox,
  VisibilityConstraint: VisibilityConstraint,
  GripperTranslation: GripperTranslation,
  PlanningScene: PlanningScene,
  AllowedCollisionMatrix: AllowedCollisionMatrix,
  BoundingVolume: BoundingVolume,
  PositionIKRequest: PositionIKRequest,
  AttachedCollisionObject: AttachedCollisionObject,
  PlannerParams: PlannerParams,
  Constraints: Constraints,
  RobotTrajectory: RobotTrajectory,
  MotionSequenceResponse: MotionSequenceResponse,
  CostSource: CostSource,
  KinematicSolverInfo: KinematicSolverInfo,
  PlanningSceneWorld: PlanningSceneWorld,
  ContactInformation: ContactInformation,
  OrientationConstraint: OrientationConstraint,
  CollisionObject: CollisionObject,
  JointLimits: JointLimits,
  MoveItErrorCodes: MoveItErrorCodes,
  CartesianTrajectoryPoint: CartesianTrajectoryPoint,
  ObjectColor: ObjectColor,
  MotionPlanDetailedResponse: MotionPlanDetailedResponse,
  MotionPlanResponse: MotionPlanResponse,
  MotionSequenceRequest: MotionSequenceRequest,
  JointConstraint: JointConstraint,
  LinkPadding: LinkPadding,
  AllowedCollisionEntry: AllowedCollisionEntry,
  MotionSequenceItem: MotionSequenceItem,
  RobotState: RobotState,
};
