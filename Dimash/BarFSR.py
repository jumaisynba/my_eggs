from random import random
from timeit import repeat
import numpy as np
from matplotlib import animation as animation, pyplot as plt, cm
from std_msgs.msg import Int64
import rospy
import time




class Visualizer():
   def __init__(self):
      
      plt.rcParams["figure.figsize"] = [2, 5]
      plt.rcParams["figure.autolayout"] = True

      self.fig = plt.figure()

      self.bars = plt.bar(0.2, 1024, 0.1, facecolor='green', alpha=0.75) 

   #def plot_init(self):




   def callback(self, msg):
      self.force_data = msg.data

   def animate(self, frame):
      
      index = self.force_data
      self.bars[frame].set_height(index)

      return self.bars




rospy.init_node('force_to_bar')

vis=Visualizer()

sub = rospy.Subscriber('/force_data',Int64, vis.callback)
ani = animation.FuncAnimation(vis.fig, vis.animate, frames=1, interval=1)

plt.show()
