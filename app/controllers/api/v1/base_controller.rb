class Api::V1::BaseController < ApplicationController
  include ExceptionHandler
  respond_to :json
end