class EventsController < ApplicationController
  # GET /events/1
  # GET /events/1.json
  def show
    @event = Event.find(event_params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @event }
    end
  end

  # GET /events/new
  # GET /events/new.json
  def new
    @event = Event.new 
    @event.story = Story.find(event_params[:story_id])

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @event }
    end
  end

  # GET /events/1/edit
  def edit
    @event = Event.find(event_params[:id])
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(event_params[:event])

    respond_to do |format|
      if @event.save
        format.html { redirect_to @event, notice: 'The event was successfully created.' }
        format.json { render json: @event, status: :created, location: @event }
      else
        format.html { render action: "new" }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /events/1
  # PUT /events/1.json
  def update
    @event = Event.find(event_params[:id])

    respond_to do |format|
      if @event.update_attributes(event_params[:event])
        format.html { redirect_to @event, notice: 'The event was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event = event.find(event_params[:id])
    @event.destroy

    respond_to do |format|
      format.html { redirect_to events_url }
      format.json { head :no_content }
    end
  end

  def event_params
    params.permit(:id, :event_type, :date, :story_id, :description)
  end
end
